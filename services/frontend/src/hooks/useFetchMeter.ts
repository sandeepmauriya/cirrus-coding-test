import { useEffect, useState } from "react";
import axios from "axios";
import type { ProcessedCustomerData } from "./useFetchMeter.types";
import { base_url } from '../url'

export function useFetchMeterData(guid: string | undefined) {
  const [data, setData] = useState<ProcessedCustomerData>();

  // Construct fetch url
  const meterURL = `${base_url}/meter/${guid}`;

  useEffect(() => {
    (async function () {
      const response = await axios.get(meterURL);
      setData(response.data[0]);
    })();
  }, [meterURL]);

  return { data };
}
