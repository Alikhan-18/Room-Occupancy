import * as React from "react";
import {
  Segment,
  Header,
  Icon,
  Statistic,
  SemanticICONS,
} from "semantic-ui-react";

interface IAnalyticSatisticProps {
  header: string;
  statisticValue: number | string;
  statisticLabel: string;
  icon?: SemanticICONS | undefined;
  style?: any;
}

export function AnalyticSatistic(props: IAnalyticSatisticProps) {
  const { header, statisticValue, statisticLabel, icon = "users", style } = props;

  return (
    <Segment compact textAlign="center" style={style}>
      <Header as="h4">
        <Icon name={icon} color="red" />
        <Header.Content>{header}</Header.Content>
      </Header>
      <Statistic color="red">
        <Statistic.Value>{statisticValue}</Statistic.Value>
        <Statistic.Label>{statisticLabel}</Statistic.Label>
      </Statistic>
    </Segment>
  );
}
