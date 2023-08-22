import './CoolText.css';
const CoolText = () => {

    const letters = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
    document.addEventListener('DOMContentLoaded', () => {

        document.querySelector("h1").onmouseover = event => {
            let interval = null;
            let iteration = 0;
            

            clearInterval(interval);
            console.log(event.target.innerText)
            interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return event.target.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * 25)]
                    })
                    .join("");

                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                iteration += 1/2;
            }, 30);
        }
    })
   
    return (
        <div className="text-block">
            <h1 data-value="MINDAUGAS ULSKIS" className="main-title">MINDAUGAS ULSKIS</h1>
            <p className="sub-title">Last year student in Vilniaus College studying software engineering. wee wooo weee wooo Text text writing yes yes</p>
        </div>
    )
}
export default CoolText