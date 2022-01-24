declare module '*.png'
declare module '*.jpeg'
declare module '*.mp3' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const content: string
  export default content
}
