import { useEffect, useState } from "react";
import axios from "axios";
import type { ProcessedCustomerData } from "./useFetchMeterData.types";

export function useFetchMeterData(guid: string | undefined) {
  const [data, setData] = useState<ProcessedCustomerData>();

  // Construct fetch url
  const baseURL =  "http://localhost:3000";
  const meterURL = `${baseURL}/meter/${guid}`;

  useEffect(() => {
    (async function () {
      const response = await axios.get(meterURL);
      setData(response.data[0]);
    })();
  }, [meterURL]);

  return { data };
}
