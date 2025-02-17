"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {

  const params = useParams();

  return (
    <LiveblocksProvider publicApiKey={"pk_dev_5tng2MIbibOoptaaJDLEAwWcSdiFdrNIKhv3wyv-SnSCUTmMknkGBUYGG3UkaS2A"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}