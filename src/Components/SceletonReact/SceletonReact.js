import ContentLoader from 'react-content-loader'

const NetflixLoader = (props) => {

     const rows = 2
     const columns = 4
     const coverHeight = 460
     const coverWidth = 280
     const padding = 5
     const speed = 2

     const coverHeightWithPadding = coverHeight + padding
     const coverWidthWithPadding = coverWidth + padding
     const initial = 35
     const covers = Array(columns * rows).fill(1)

     return (
          <ContentLoader
               speed={speed}
               width={columns * coverWidthWithPadding}
               height={rows * coverHeightWithPadding}
               primarycolor="#242b34"
               secondarycolor="#343d4c"
               {...props}
          >
               {covers.map((g, i) => {
                    let vy = Math.floor(i / columns) * coverHeightWithPadding + initial
                    let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
                    return (
                         <rect
                              key={i}
                              x={vx}
                              y={vy}
                              rx="0"
                              ry="0"
                              width={coverWidth}
                              height={coverHeight}
                         />
                    )
               })}
          </ContentLoader>
     )
};

export default NetflixLoader;