import * as React from "react";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}