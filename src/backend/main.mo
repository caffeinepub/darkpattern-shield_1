import Array "mo:core/Array";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Order "mo:core/Order";

actor {
  // Types
  type ScamType = {
    #phishing;
    #investmentFraud;
    #romanceScam;
    #identityTheft;
    #other : Text;
  };

  module ScamType {
    public func compare(type1 : ScamType, type2 : ScamType) : Order.Order {
      switch (type1, type2) {
        case (#phishing, #phishing) { #equal };
        case (#phishing, _) { #less };
        case (#investmentFraud, #phishing) { #greater };
        case (#investmentFraud, #investmentFraud) { #equal };
        case (#investmentFraud, _) { #less };
        case (#romanceScam, #identityTheft) { #greater };
        case (#romanceScam, #romanceScam) { #equal };
        case (#romanceScam, _) { #less };
        case (#identityTheft, #identityTheft) { #equal };
        case (#identityTheft, _) { #less };
        case (#other(t1), #other(t2)) { Text.compare(t1, t2) };
        case (#other(_), _) { #greater };
      };
    };
  };

  type Report = {
    id : Nat;
    reporter : Principal;
    description : Text;
    scamType : ScamType;
    timestamp : Time.Time;
  };

  type ScamTypeCount = {
    scamType : ScamType;
    count : Nat;
  };

  type Stats = {
    totalReports : Nat;
    mostCommonScamType : ?ScamTypeCount;
  };

  // State
  let reports = Map.empty<Nat, Report>();
  var nextReportId = 0;

  // Update methods
  public shared ({ caller }) func submitReport(description : Text, scamType : ScamType) : async Nat {
    let report : Report = {
      id = nextReportId;
      reporter = caller;
      description;
      scamType;
      timestamp = Time.now();
    };

    reports.add(nextReportId, report);
    nextReportId += 1;
    report.id;
  };

  // Query methods
  public query ({ caller }) func getTotalReports() : async Nat {
    reports.size();
  };

  public query ({ caller }) func getReportsByUser(user : Principal) : async [Report] {
    reports.values().toArray().filter(func(report) { report.reporter == user });
  };

  public query ({ caller }) func getStats() : async Stats {
    let mostCommonScamType = calculateMostCommonScamType();
    {
      totalReports = reports.size();
      mostCommonScamType;
    };
  };

  func calculateMostCommonScamType() : ?ScamTypeCount {
    if (reports.isEmpty()) { return null };

    let counts = Map.empty<ScamType, Nat>();

    for ((_, report) in reports.entries()) {
      switch (counts.get(report.scamType)) {
        case (null) {
          counts.add(report.scamType, 1);
        };
        case (?count) {
          counts.add(report.scamType, count + 1);
        };
      };
    };

    var maxType : ?ScamTypeCount = null;

    for ((scamType, count) in counts.entries()) {
      switch (maxType) {
        case (null) {
          maxType := ?{
            scamType;
            count;
          };
        };
        case (?currentMax) {
          if (count > currentMax.count) {
            maxType := ?{
              scamType;
              count;
            };
          };
        };
      };
    };

    maxType;
  };
};
