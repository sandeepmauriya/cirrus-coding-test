import { LogoBox, Profile, DeviceTime, TextCard, Signal } from "../components";
import { useParams } from "react-router-dom";
import { useFetchMeterData } from "../hooks/useFetchMeterData";
import styled from "styled-components";
import { removeHyphens } from "../utils/formatString";

export function Meter() {
  // Get ID from path params
  const { id } = useParams<{ id: string }>();

  // Fetch the customer data from custom data fetch hook
  const { data } = useFetchMeterData(id);
  // When data is fetched, display the customer data
  if (data) {
    // Format time to display HH:MM:SS
    const date = new Date(data.commsHub?.deviceTime);

    // Return the main grid wrapper component
    return (
      <Wrapper>
        <InfoContainer>
          <Profile
            fullName={data.firstName + ' ' +  data.lastName}
            avatar={data.avatar}
            address={data.address.firstLine}
            events={data.commsHub.events.length}
            hasSmartMeter={data.hasSmartMeter}
          />
          <FlexContainer>
            <LogoBox
              base64Image={data.commsHub.manufacturer.logoBase64}
              subtitle="Make / Model"
            />
            <LogoBox
              base64Image={data.commsHub.supplier.logoBase64}
              subtitle="Supplier"
            />
          </FlexContainer>
          <Signal value={data.commsHub.signal.toFixed(2)} />
        </InfoContainer>
        <DeviceMetadata>
          <DeviceTime time={date.toLocaleTimeString()} subtitle="Device Time" />
          <HorizontalFlex>
            <MetadataRow>
              <TextCard
                subtitle="IPV6 Address"
                text={data.commsHub.ipv6.toUpperCase()}
              />
              <TextCard
                subtitle="IMEI"
                text={removeHyphens(data.commsHub.imei)}
              />
            </MetadataRow>
            <MetadataRow>
              <TextCard
                subtitle="ICC"
                text={removeHyphens(data.commsHub.icc)}
              />
              <TextCard
                subtitle="MSISDN"
                text={removeHyphens(data.commsHub.msisdn)}
              />
            </MetadataRow>
          </HorizontalFlex>
        </DeviceMetadata>
      </Wrapper>
    );
  }
}

const FlexContainer = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 15px;
`;

const HorizontalFlex = styled(FlexContainer)`
  flex-direction: column;
  gap: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
  max-width: 970px;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DeviceMetadata = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MetadataRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
