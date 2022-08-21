// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);


}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;

}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
}
function calculatesFarePrice(start, destination) {

    const a = distanceTravelledInFeet(start, destination)


    if (a < 400) {
        return 0;
    }
    else if (a < 2000 && a > 400) {
        return  0.02 * (a - 400);
    } else if (a < 2500 && a > 2000) {
        return 25;
    } else {
        return 'cannot travel that far' ;
    }
} 
