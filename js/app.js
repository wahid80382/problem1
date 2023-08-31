
document.getElementById(`area_option`).addEventListener(`click`, function () {
    let Value = document.getElementById(`area_option`).value;
    document.getElementById(`area_Result`).innerHTML = Value;


});
function show() {
    let Value = document.getElementById(`area_option`).value;
    let Square = document.getElementById(`Square`).value;
    let base = document.getElementById(`base`).value;
    let height = document.getElementById(`height`).value;
    let SquareResult = base * height;

    let Cercle = document.getElementById(`Cercle`).value;
    let CercleResult = `sorry`;

    let Rectangle = document.getElementById(`Rectangle`).value;
    let RectangleResult = base * height;

    let Triangle = document.getElementById(`Triangle`).value;
    let TriangleResult = (base * height) / 2;

    let Trapezium = document.getElementById(`Trapezium`).value;
    let TrapeziumResult = (base * height) / 2 ;

    let Parallelogram = document.getElementById(`Parallelogram`).value;
    let ParallelogramResult = base * height ;

    // let Rhombus = document.getElementById(`Rhombus`).value;
    // let RhombusResult = (base * height) / 2 ;

    let Kite = document.getElementById(`Kite`).value;
    let KiteResult = (base * height) / 2 ;


    if (Value == Square) {
        document.getElementById(`area_Result2`).innerHTML = SquareResult;
    } else if (Value == Cercle) {
        document.getElementById(`area_Result2`).innerHTML = CercleResult;
    } else if (Value == Rectangle) {
        document.getElementById(`area_Result2`).innerHTML = RectangleResult;
    } else if (Value == Triangle) {
        document.getElementById(`area_Result2`).innerHTML = TriangleResult;
    } else if (Value == Trapezium) {
        document.getElementById(`area_Result2`).innerHTML = TrapeziumResult;
    } else if (Value == Parallelogram) {
        document.getElementById(`area_Result2`).innerHTML = ParallelogramResult;
    } else if (Value == Rhombus) {
        document.getElementById(`area_Result2`).innerHTML = RhombusResult;
    } else if (Value == Kite) {
        document.getElementById(`area_Result2`).innerHTML = KiteResult;
    }
    else {
        document.getElementById(`area_Result2`).innerHTML = `your input wrong `
    }
}











