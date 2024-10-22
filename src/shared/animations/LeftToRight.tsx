import { animated, useSpring } from "@react-spring/web";

export default function LeftToRight({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
}
