import { animated, useSpring } from "@react-spring/web";

export default function BottomToUp({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = useSpring({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
}
