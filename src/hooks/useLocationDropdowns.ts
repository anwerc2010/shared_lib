import { useState, useEffect } from "react";
import { getApiBaseUrl } from "../api/baseApi";

export interface LocationOption {
  id: number;
  name: string;
}

interface UseLocationDropdownsReturn {
  states: LocationOption[];
  districts: LocationOption[];
  blocks: LocationOption[];
  mandals: LocationOption[];
  statesLoading: boolean;
  districtsLoading: boolean;
  blocksLoading: boolean;
  mandalsLoading: boolean;
}

/**
 * Cascading location dropdowns hook.
 *
 * Pass the currently-selected IDs (from your form state) and the hook will
 * automatically fetch the child options whenever a parent ID changes.
 *
 * UX rules:
 *  - States are fetched once on mount.
 *  - Districts reset + refetch when stateId changes (or clear when null).
 *  - Blocks   reset + refetch when districtId changes.
 *  - Mandals  reset + refetch when blockId changes.
 *
 * Usage (in a component):
 *
 *   const stateId    = formData.state_id    ?? null;
 *   const districtId = formData.district_id ?? null;
 *   const blockId    = formData.block_id    ?? null;
 *
 *   const { states, districts, blocks, mandals, ... } =
 *     useLocationDropdowns(stateId, districtId, blockId);
 */
export function useLocationDropdowns(
  stateId?: number | null,
  districtId?: number | null,
  blockId?: number | null,
): UseLocationDropdownsReturn {
  const [states, setStates] = useState<LocationOption[]>([]);
  const [districts, setDistricts] = useState<LocationOption[]>([]);
  const [blocks, setBlocks] = useState<LocationOption[]>([]);
  const [mandals, setMandals] = useState<LocationOption[]>([]);

  const [statesLoading, setStatesLoading] = useState(false);
  const [districtsLoading, setDistrictsLoading] = useState(false);
  const [blocksLoading, setBlocksLoading] = useState(false);
  const [mandalsLoading, setMandalsLoading] = useState(false);

  // Fetch states once on mount
  useEffect(() => {
    let cancelled = false;
    setStatesLoading(true);

    fetch(`${getApiBaseUrl()}/location/states`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          if (Array.isArray(data)) {
            setStates(data);
          } else if (Array.isArray(data?.data)) {
            setStates(data.data);
          } else {
            setStates([]);
          }
        }
      })
      .catch(() => {
        if (!cancelled) setStates([]);
      })
      .finally(() => {
        if (!cancelled) setStatesLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Fetch districts when stateId changes
  useEffect(() => {
    setDistricts([]);

    if (!stateId) {
      setDistrictsLoading(false);
      return;
    }

    let cancelled = false;
    setDistrictsLoading(true);

    fetch(`${getApiBaseUrl()}/location/districts/${stateId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          if (Array.isArray(data)) {
            setDistricts(data);
          } else if (Array.isArray(data?.data)) {
            setDistricts(data.data);
          } else {
            setDistricts([]);
          }
        }
      })
      .catch(() => {
        if (!cancelled) setDistricts([]);
      })
      .finally(() => {
        if (!cancelled) setDistrictsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [stateId]);

  // Fetch blocks when districtId changes
  useEffect(() => {
    setBlocks([]);

    if (!districtId) {
      setBlocksLoading(false);
      return;
    }

    let cancelled = false;
    setBlocksLoading(true);

    fetch(`${getApiBaseUrl()}/location/blocks/${districtId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          if (Array.isArray(data)) {
            setBlocks(data);
          } else if (Array.isArray(data?.data)) {
            setBlocks(data.data);
          } else {
            setBlocks([]);
          }
        }
      })
      .catch(() => {
        if (!cancelled) setBlocks([]);
      })
      .finally(() => {
        if (!cancelled) setBlocksLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [districtId]);

  // Fetch mandals when blockId or districtId changes. If blockId is not provided,
  // fallback to districtId in case API supports mandals retrieval by district.
  useEffect(() => {
    setMandals([]);

    const parentId = blockId || districtId;
    if (!parentId) {
      setMandalsLoading(false);
      return;
    }

    let cancelled = false;
    setMandalsLoading(true);

    fetch(`${getApiBaseUrl()}/location/mandals/${parentId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          if (Array.isArray(data)) {
            setMandals(data);
          } else if (Array.isArray(data?.data)) {
            setMandals(data.data);
          } else {
            setMandals([]);
          }
        }
      })
      .catch(() => {
        if (!cancelled) setMandals([]);
      })
      .finally(() => {
        if (!cancelled) setMandalsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [blockId, districtId]);

  return {
    states,
    districts,
    blocks,
    mandals,
    statesLoading,
    districtsLoading,
    blocksLoading,
    mandalsLoading,
  };
}
