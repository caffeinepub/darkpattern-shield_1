import { createRouter, RouterProvider, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import SubscriptionTrapDetectorPage from './pages/SubscriptionTrapDetectorPage';
import PersonalDigitalRiskTestPage from './pages/PersonalDigitalRiskTestPage';
import ScamReportingPage from './pages/ScamReportingPage';
import BrowserExtensionConceptPage from './pages/BrowserExtensionConceptPage';

const rootRoute = createRootRoute({
  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const detectorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/detector',
  component: SubscriptionTrapDetectorPage,
});

const riskTestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/risk-test',
  component: PersonalDigitalRiskTestPage,
});

const reportingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/report',
  component: ScamReportingPage,
});

const extensionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/extension',
  component: BrowserExtensionConceptPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  detectorRoute,
  riskTestRoute,
  reportingRoute,
  extensionRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
