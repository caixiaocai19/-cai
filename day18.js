/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function (obstacleGrid) {
    let row = obstacleGrid.length;
    let colum = obstacleGrid[0].length;
    let res = new Array(row+1).fill(new Array(colum+1).fill(0));
    res[0][1]=1;
    if(obstacleGrid[0][0]===1||obstacleGrid[row-1][colum-1]===1){
        return 0;
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<colum;j++){
            if(obstacleGrid[i][j]!==1){
                res[i+1][j+1]=res[i][j+1]+res[i+1][j];
            }else{
                res[i+1][j+1]=0;
            }
        }
    }
    return res[row][colum];
};