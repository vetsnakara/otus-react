import React from 'react'

interface Props {
  name: string
  style?: object
  fill?: string
  viewBox?: string
  width?: string
  className?: string
  height?: string
}

const getViewBox = (name: string) => {
  switch (name) {
    case 'check':
      return '0 0 512 512'
    case 'cancel':
      return '0 0 512.001 512.001'
    default:
      return '0 0 32 32'
  }
}

const getPath = (name: string, props: { fill: string }) => {
  switch (name) {
    case 'check':
      return (
        <path
          {...props}
          d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z"
        />
      )
    case 'cancel':
      return (
        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892 L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999 c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998 c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z" />
      )
    default:
      return <path />
  }
}

const SVGIcon: React.FC<Props> = ({
  name,
  style = {},
  fill = '#000',
  viewBox = '',
  width = '100%',
  className = '',
  height = '100%'
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
)

export default SVGIcon
