import { Metadata, Subtitle, Title, Value } from "../../Style/style";
import { Bar, IconWrapper } from "./Signal.styles";
import type { SignalProps } from "./Signal.types";

/**
 * Render the Signal component with the value of the signal and the icon
 * @param SignalProps Props to render the Signal Component
 * @param SignalProps.value The value of the signal
 * @returns The Signal Component widget
 */
export function Signal({ value }: SignalProps) {
  return (
    <Metadata>
      <IconWrapper>
        <Bar color="#34D399" style={{ height: "20%" }} />
        <Bar color="#34D399" style={{ height: "40%" }} />
        <Bar color="#34D399" style={{ height: "60%" }} />
        <Bar color="#9CA3AF" style={{ height: "80%" }} />
      </IconWrapper>
      <Value>{value}</Value>
      <Title>
        <Subtitle>Signal</Subtitle>
      </Title>
    </Metadata>
  );
}
