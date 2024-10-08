import * as React from "react";
import styles from './styles.module.css'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}