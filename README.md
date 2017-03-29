Run local server

    http-server -a localhost -p 80
    
    
    
##Good color combinations:
//Black and white 

            if (pixelDiff + 85 >= pixelDiffThreshold) {
                rgba[i] = 255;
                rgba[i + 1] = 255;
                rgba[i + 2] = 255;
            } else {
                rgba[i] = 0;
                rgba[i + 1] = 0;
                rgba[i + 2] = normalized;
            }
 
 //Smooth blue or every color
 
             if (pixelDiff >= pixelDiffThreshold + 100) {
                 rgba[i] = 255;
                 rgba[i + 1] = 255;
                 rgba[i + 2] = 255;
             } else {
                 rgba[i] = 0;
                 rgba[i + 1] = 0;
                 rgba[i + 2] = normalized;
             }
             
// Ghostly

            if (pixelDiff >= pixelDiffThreshold + 100) {
                rgba[i] = 255;
                rgba[i + 1] = 255;
                rgba[i + 2] = 255;
            } else {
                rgba[i] = 0;
                rgba[i + 1] = normalized;
                rgba[i + 2] = normalized - (normalized / 2);
            }
            
//White background, green effects

    for (var i = 0; i < rgba.length; i += 4) {
            var pixelDiff = rgba[i] * 0.3 + rgba[i + 1] * 0.6 + rgba[i + 2] * 0.1;
            var normalized = Math.min(255, pixelDiff * (255 / pixelDiffThreshold));

            // if(i % 10000000000 === 0){
            //     console.log(parseInt(Math.floor(pixelDiff)) < 500);
            // }

            if(parseInt(Math.floor(pixelDiff)) < parseInt(25)){
                rgba[i] = 255;
                rgba[i + 1] =255;
                rgba[i + 2] = 255;
            }else if (pixelDiff >= pixelDiffThreshold + 100) {
                rgba[i] = 255;
                rgba[i + 1] = 255;
                rgba[i + 2] = 255;
            } else {
                rgba[i] = 0;
                rgba[i + 1] = normalized - (normalized / 5);
                rgba[i + 2] = normalized - (normalized / 2);
            }


            if (pixelDiff >= pixelDiffThreshold) {
                score++;
                coords = calculateCoordinates(i / 4);

                if (includeMotionBox) {
                    motionBox = calculateMotionBox(motionBox, coords.x, coords.y);
                }

                if (includeMotionPixels) {
                    motionPixels = calculateMotionPixels(motionPixels, coords.x, coords.y, pixelDiff);
                }

            }
        }
        

//Violet

         for (var i = 0; i < rgba.length; i += 4) {
                    var pixelDiff = rgba[i] * 0.3 + rgba[i + 1] * 0.6 + rgba[i + 2] * 0.1;
                    var normalized = Math.min(255, pixelDiff * (255 / pixelDiffThreshold));
        
                    // if(i % 10000000000 === 0){
                    //     console.log(parseInt(Math.floor(pixelDiff)) < 500);
                    // }
        
                    if (parseInt(Math.floor(pixelDiff)) < parseInt(25)) {
                        rgba[i] = r1;
                        rgba[i + 1] = r2;
                        rgba[i + 2] = r3;
                    } else if (pixelDiff >= pixelDiffThreshold + 100) {
                        rgba[i] = w1;
                        rgba[i + 1] = w2;
                        rgba[i + 2] = w3;
                    } else {
                        rgba[i] = w3;
                        rgba[i + 1] =w3;
                        rgba[i + 2] = normalized - (normalized / 2);
                    }
        
        
                    if (pixelDiff >= pixelDiffThreshold) {
                        score++;
                        coords = calculateCoordinates(i / 4);
        
                        if (includeMotionBox) {
                            motionBox = calculateMotionBox(motionBox, coords.x, coords.y);
                        }
        
                        if (includeMotionPixels) {
                            motionPixels = calculateMotionPixels(motionPixels, coords.x, coords.y, pixelDiff);
                        }
        
                    }
                }
        