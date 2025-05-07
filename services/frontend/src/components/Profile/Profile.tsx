import type { ProfileCardProps } from "./Profile.types";
import { Avatar, Button, Header, ProfileCard } from "./Profile.styles";
import { SubValue, Value } from "../../Style/style";

/**
 * Render the Profile Card
 * @param ProfileCardProps Props to render the Profile Component
 * @param ProfileCardProps.fullName The full name of the user
 * @param ProfileCardProps.avatar The avatar of the user
 * @param ProfileCardProps.address The address of the user
 * @param ProfileCardProps.events The number of events the user has
 * @param ProfileCardProps.hasSmartMeter Whether the user has a smart meter
 * @returns The Profile Card
 */
export function Profile({
  fullName,
  avatar,
  address,
  events,
  hasSmartMeter,
}: ProfileCardProps) {
  return (
    <ProfileCard>
      <Avatar src={avatar} alt="Profile" className="profile-image" />
      <div>
        <Header>{fullName}</Header>
        <Value>{address}</Value>
        <SubValue>{events} events</SubValue>
        {hasSmartMeter ? (
          <Button className="smart-meter-button">Smart Meter</Button>
        ) : null}
      </div>
    </ProfileCard>
  );
}
