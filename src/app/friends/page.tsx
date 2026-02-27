import type { Metadata } from "next";
import FriendsClient from "./FriendsClient";

export const metadata: Metadata = {
  title: "Friends — RMM.AI",
  description: "See what your friends are listening to in real time.",
};

export default function FriendsPage() {
  return <FriendsClient />;
}
