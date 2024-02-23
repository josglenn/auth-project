"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

export function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button
      size={"sm"}
      variant={"link"}
      onClick={() => {}}
      className="font-normal w-full"
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
