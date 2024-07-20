import type { Metadata } from "next"
import type { ReactNode } from "react"

import "@/app/styles/globals.css"

export const metadata: Metadata = {
	title: "",
	description: "",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}