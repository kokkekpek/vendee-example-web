declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.sass' {
  const classes: Record<string, string>
  export default classes
}
