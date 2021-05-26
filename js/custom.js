function result(){
    var marks = 85;

    switch(true){
        case marks>=80 && marks<=100 :
        document.write("Your grade is A+");
        break;
        case marks>=70 && marks<=79 :
        document.write("Your grade is A");
        break;
        case marks>=60 && marks<=69 :
        document.write("Your grade is A-");
        break;
        case marks>=50 && marks<=59 :
        document.write("Your grade is B");
        break;
        case marks>=41 && marks<=50 :
        document.write("Your grade is C");
        break;
        case marks>=33 && marks<=40 :
        document.write("Your grade is P");
        break;
        case marks<=33 :
        document.write("Your grade is F");
        break;
        default:
        document.write("please enter a valid number")
    }
}