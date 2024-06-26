const block1Col1 = document.querySelector(".block_one_col1");
const block1Col2 = document.querySelector(".block_one_col2");

const block_one_col2Char = document.querySelector(".block_one_col2Char");
const block_two_col2Char = document.querySelector(".block_two_col2Char");
const block_three_col2Char = document.querySelector(".block_three_col2Char");
const block_four_col2Char = document.querySelector(".block_four_col2Char");
const block_five_col2Char = document.querySelector(".block_five_col2Char");
const block_six_col2Char = document.querySelector(".block_six_col2Char");
const block_seven_col2Char = document.querySelector(".block_seven_col2Char");
const block_eight_col2Char = document.querySelector(".block_eight_col2Char");


const block2Col1 = document.querySelector(".block_two_col1");
const block2Col2 = document.querySelector(".block_two_col2");

const block3Col1 = document.querySelector(".block_three_col1");
const block3Col2 = document.querySelector(".block_three_col2");

const block4Col1 = document.querySelector(".block_four_col1");
const block4Col2 = document.querySelector(".block_four_col2");

const block5Col1 = document.querySelector(".block_five_col1");
const block5Col2 = document.querySelector(".block_five_col2");

const block6Col1 = document.querySelector(".block_six_col1");
const block6Col2 = document.querySelector(".block_six_col2");

const block7Col1 = document.querySelector(".block_seven_col1");
const block7Col2 = document.querySelector(".block_seven_col2");

const block8Col1 = document.querySelector(".block_eight_col1");
const block8Col2 = document.querySelector(".block_eight_col2");

const enter_number_of_blocks = document.querySelector(".enter_number_of_blocks");
const number_of_blocks = document.querySelector(".number_of_blocks");

const eight_container = document.querySelector(".eight_container");

function build(number){
    block1Col1.textContent = "";
    block1Col2.textContent = "";
    block2Col1.textContent = "";
    block2Col2.textContent = "";
    block3Col1.textContent = "";
    block3Col2.textContent = "";
    block4Col1.textContent = "";
    block4Col2.textContent = "";
    block5Col1.textContent = "";
    block5Col2.textContent = "";
    block6Col1.textContent = "";
    block6Col2.textContent = "";
    block7Col1.textContent = "";
    block7Col2.textContent = "";
    block8Col1.textContent = "";
    block8Col2.textContent = "";

    block_one_col2Char.textContent = "";
    block_two_col2Char.textContent = ""; 
    block_three_col2Char.textContent = "";
    block_four_col2Char.textContent = "";
    block_five_col2Char.textContent = "";
    block_six_col2Char.textContent = ""; 
    block_seven_col2Char.textContent = "";
    block_eight_col2Char.textContent = "";

    if(number >= 1 && number <=8){
        for(let x = number; x > 0; x--){
            for(let y = number; y > 0; y--){
                for(let z = y; z > 0; z--){
                //    console.log(y)
                if(number === 8){
                    if(y === 8){
                        block1Col2.textContent += " -"
                       }else if(y === 7){
                        block2Col2.textContent += " -"
                       }else if(y === 6){
                        block3Col2.textContent += " -"
                       }if(y === 5){
                        block4Col2.textContent += " -"
                       }else if(y === 4){
                        block5Col2.textContent += " -"
                       }else if(y === 3){
                        block6Col2.textContent += " -"
                       }else if(y === 2){
                        block7Col2.textContent += " -"
                       }else if(y === 1){
                        block8Col2.textContent += " -"
                       }
                }
                if(number === 7){
                    // console.log(y)
                    if(y === 7){
                        block1Col2.textContent += " -"
                      }else if( y === 6){
                          block2Col2.textContent += " -"
                      }else if( y === 5){
                          block3Col2.textContent += " -"
                      }else if( y === 4){
                          block4Col2.textContent += " -"
                      }else if( y === 3){
                          block5Col2.textContent += " -"
                      }else if(y===2){
                        block6Col2.textContent += " -"
                      }else if(y === 1){
                        block7Col2.textContent += " -"
                      }

                    }
                
                if(number === 6){
                    if( y === 6){
                        block1Col2.textContent += " -";
                    }else if( y === 5){
                        block2Col2.textContent += " -"
                    }else if( y === 4){
                        block3Col2.textContent += " -"
                    }else if( y === 3){
                        block4Col2.textContent += " -"
                    }else if(y===2){
                      block5Col2.textContent += " -"
                    }else if(y === 1){
                      block6Col2.textContent += " -"
                    }
                }

                if(number === 5){
                    if( y === 5){
                        block1Col2.textContent += " -"
                    }else if( y === 4){
                        block2Col2.textContent += " -"
                    }else if( y === 3){
                        block3Col2.textContent += " -"
                    }else if( y === 2){
                        block4Col2.textContent += " -"
                    }else if(y===1){
                      block5Col2.textContent += " -"
                    }
                }

                if(number === 4){
                    if( y === 4){
                        block1Col2.textContent += " -"
                    }else if( y === 3){
                        block2Col2.textContent += " -"
                    }else if( y === 2){
                        block3Col2.textContent += " -"
                    }else if( y === 1){
                        block4Col2.textContent += " -"
                    }
                }

                if(number === 3){
                    if( y === 3){
                        block1Col2.textContent += " -"
                    }else if( y === 2){
                        block2Col2.textContent += " -"
                    }else if( y === 1){
                        block3Col2.textContent += " -"
                    }
                }

                if(number === 2){
                    if( y === 2){
                        block1Col2.textContent += " -"
                    }else if( y === 1){
                        block2Col2.textContent += " -"
                    }
                }

                if(number === 1){
                    if( y === 1){
                        block1Col2.textContent += " -"
                    }
                }
                }
            }
            break
        }

        for(let x = 1; x <=number; x++){
            for(let y = 1; y <= number; y++){
                for(let z = 1; z <= y; z++){
                  if(number === 8){
                    if(y === 1){
                        block1Col1.textContent += "#"
                        block_one_col2Char.textContent += "#"
                       }else if(y === 2){
                        block2Col1.textContent += "#"
                        block_two_col2Char.textContent += "#"
                       }else if(y === 3){
                        block3Col1.textContent += "#"
                        block_three_col2Char.textContent += "#"
                       }else if(y === 4){
                        block4Col1.textContent += "#"
                        block_four_col2Char.textContent += "#"
                       }else if(y === 5){
                        block5Col1.textContent += "#"
                        block_five_col2Char.textContent += "#"
                       }else if(y === 6){
                        block6Col1.textContent += "#"
                        block_six_col2Char.textContent += "#"
                       }else if(y === 7){
                        block7Col1.textContent += "#"
                        block_seven_col2Char.textContent += "#"
                       }else if(y === 8){
                        block8Col1.textContent += "#"
                        block_eight_col2Char.textContent+= "#"
                       }
                  }
                  
                  else if(number === 7){
                    if(y === 1){
                        block1Col1.textContent += "#"
                        block_one_col2Char.textContent += "#"
                       }else if(y === 2){
                        block2Col1.textContent += "#"
                        block_two_col2Char.textContent += "#"
                       }else if(y === 3){
                        block3Col1.textContent += "#"
                        block_three_col2Char.textContent += "#"
                       }else if(y === 4){
                        block4Col1.textContent += "#"
                        block_four_col2Char.textContent += "#"
                       }else if(y === 5){
                        block5Col1.textContent += "#"
                        block_five_col2Char.textContent += "#"
                       }else if(y === 6){
                        block6Col1.textContent += "#"
                        block_six_col2Char.textContent += "#"
                       }else if(y === 7){
                        block7Col1.textContent += "#"
                        block_seven_col2Char.textContent += "#"
                       }
                  }

                  else if(number === 6){
                    if(y === 1){
                        block1Col1.textContent += "#"
                        block_one_col2Char.textContent += "#"
                       }else if(y === 2){
                        block2Col1.textContent += "#"
                        block_two_col2Char.textContent += "#"
                       }else if(y === 3){
                        block3Col1.textContent += "#"
                        block_three_col2Char.textContent += "#"
                       }else if(y === 4){
                        block4Col1.textContent += "#"
                        block_four_col2Char.textContent += "#"
                       }else if(y === 5){
                        block5Col1.textContent += "#"
                        block_five_col2Char.textContent += "#"
                       }else if(y === 6){
                        block6Col1.textContent += "#"
                        block_six_col2Char.textContent += "#"
                       }
                  }

                  else if(number === 5){
                    if(y === 1){
                        block1Col1.textContent += "#"
                        block_one_col2Char.textContent += "#"
                       }else if(y === 2){
                        block2Col1.textContent += "#"
                        block_two_col2Char.textContent += "#"
                       }else if(y === 3){
                        block3Col1.textContent += "#"
                        block_three_col2Char.textContent += "#"
                       }else if(y === 4){
                        block4Col1.textContent += "#"
                        block_four_col2Char.textContent += "#"
                       }else if(y === 5){
                        block5Col1.textContent += "#"
                        block_five_col2Char.textContent += "#"
                    }
                  }

                  else if(number === 4){
                    if(y === 1){
                        block1Col1.textContent += "#"
                        block_one_col2Char.textContent += "#"
                       }else if(y === 2){
                        block2Col1.textContent += "#"
                        block_two_col2Char.textContent += "#"
                       }else if(y === 3){
                        block3Col1.textContent += "#"
                        block_three_col2Char.textContent += "#"
                       }else if(y === 4){
                        block4Col1.textContent += "#"
                        block_four_col2Char.textContent += "#"
                       }
                  }

                  else if(number === 3){
                    if(y === 1){
                        block1Col1.textContent += "#"
                        block_one_col2Char.textContent += "#"
                       }else if(y === 2){
                        block2Col1.textContent += "#"
                        block_two_col2Char.textContent += "#"
                       }else if(y === 3){
                        block3Col1.textContent += "#"
                        block_three_col2Char.textContent += "#"
                       }
                  }

                  else if(number === 2){
                    if(y === 1){
                        block1Col1.textContent += "#"
                        block_one_col2Char.textContent += "#"
                       }else if(y === 2){
                        block2Col1.textContent += "#"
                        block_two_col2Char.textContent += "#"
                       }
                  }

                  else if(number === 1){
                    if(y === 1){
                        block1Col1.textContent += "#"
                        block_one_col2Char.textContent += "#"
                       }
                  }
                }
            }
            break
        }
    }else{
        alert("Please enter a number between 1 and 8")
    }
}

build(5)

enter_number_of_blocks.addEventListener("submit", (event)=>{
    let totalBlock = Number(number_of_blocks.value);
    build(totalBlock)
    event.preventDefault()
})