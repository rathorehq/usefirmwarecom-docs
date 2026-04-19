import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

// Mirrors usefirmware-website/components/header.tsx — periwinkle 1px gradient
// frame around a navy row-gradient fill, "0x" in DotGothic16 over Lumen text.
const Logo = () => (
  <div
    style={{
      padding: '1px',
      background: 'linear-gradient(to bottom, #769CFF, #475D99)',
      borderRadius: '2px',
      display: 'inline-flex',
    }}
  >
    <div
      style={{
        padding: '6px',
        background: 'linear-gradient(to bottom, #0D0D0D, #172751)',
        boxShadow: '0 0 0 1px rgba(13,13,13,1)',
        display: 'inline-flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        minHeight: '48px',
      }}
    >
      <span
        style={{
          fontFamily: "'DotGothic16', 'MS Gothic', 'Hiragino Sans GB', monospace",
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: 1,
          color: '#fafbf6',
          letterSpacing: '-0.02em',
        }}
      >
        0x
      </span>
    </div>
  </div>
)

// Custom SVG download icon matching usefirmware-website icon style
// (32x32 viewBox, white stroke, 2px stroke width)
const DownloadIcon = () => (
  <img
    src="/download.svg"
    alt="Download"
    width={24}
    height={24}
    style={{ display: 'block' }}
  />
)

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://usefirmware.com/install.sh',
    icon: <DownloadIcon />,
  },
  gitTimestamp: () => null,
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="description" content="Omen - AI firmware test engineer." />
      <meta property="og:title" content="Docs - AI firmware test engineer" />
      <title>Docs - AI firmware test engineer</title>
    </>
  ),
  navbar: {
    extraContent: (
      <a
        href="https://usefirmware.com/app"
        style={{
          fontFamily: "'Glacial Indifference', 'Manrope', sans-serif",
          fontWeight: 500,
          fontSize: '14px',
          padding: '6px 12px',
          borderRadius: '2px',
          background: '#7cb4e6',
          color: '#0f0f1b',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Open Omen
      </a>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
  },
  toc: {
    backToTop: false,
  },
  footer: {
    content: (
      <span style={{ fontFamily: "'Glacial Indifference', 'Manrope', sans-serif" }}>
        © {new Date().getFullYear()} Omen · d@usefirmware.com
      </span>
    ),
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  feedback: {
    content: null,
    labels: '',
  },
  editLink: {
    component: () => null,
  },
}

export default config
