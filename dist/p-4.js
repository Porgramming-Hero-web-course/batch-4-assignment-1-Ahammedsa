"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        throw new Error("Error");
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 10 });
    const recantagleArea = calculateShapeArea({ shape: "rectangle", width: 10, height: 32 });
    console.log(circleArea);
    console.log(recantagleArea);
    //
}
