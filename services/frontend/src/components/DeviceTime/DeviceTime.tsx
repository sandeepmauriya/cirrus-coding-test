import type { DeviceTimeProps } from "./DeviceTime.types";
import { TimeWrapper } from "./DeviceTime.styles";
import { Metadata, Subtitle, Title } from "../../style/style";

/**
 * Render the Device Time
 * @param DeviceTimeProps Props to render the DeviceTime Component
 * @param DeviceTimeProps.time The time to render in the format HH:MM:SS
 * @param DeviceTimeProps.subtitle Subtitle of the widget
 * @returns The widget to render the device time
 */
export function DeviceTime({ time, subtitle }: DeviceTimeProps) {
  return (
    <Metadata>
      <TimeWrapper>{time}</TimeWrapper>
      <Title>
        <Subtitle>{subtitle}</Subtitle>
      </Title>
    </Metadata>
  );
}