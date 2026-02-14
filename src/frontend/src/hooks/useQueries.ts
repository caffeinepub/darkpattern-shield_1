import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Stats } from '../backend';

type ScamCategory = 'Subscription Trap' | 'Fake Discount' | 'OTP Scam';

function mapCategoryToScamType(category: ScamCategory) {
  return { __kind__: 'other' as const, other: category };
}

export function useGetStats() {
  const { actor, isFetching } = useActor();

  return useQuery<Stats>({
    queryKey: ['stats'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getStats();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitReport() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ description, category }: { description: string; category: ScamCategory }) => {
      if (!actor) throw new Error('Actor not initialized');
      const scamType = mapCategoryToScamType(category);
      return actor.submitReport(description, scamType);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
}
