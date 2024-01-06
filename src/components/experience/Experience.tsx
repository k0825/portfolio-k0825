import { Text, Timeline, TimelineItem } from "@mantine/core";

export const Experience = () => {
  return (
    <Timeline active={1} bulletSize={25} lineWidth={4}>
      <TimelineItem title="東京電機大学 システムデザイン工学部情報システム工学科">
        <Text c="dimmed" size="sm">
          2017-4 - 2021-3
        </Text>
      </TimelineItem>
      <TimelineItem title="ニフティ株式会社 入社">
        <Text c="dimmed" size="sm">
          2021-4 - now
        </Text>
      </TimelineItem>
    </Timeline>
  );
};
