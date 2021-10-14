import style from "./style.module.css"

export function Button() {
    return<>
        <div className={style.searchCont}>
            <button
                className={style.input}
                type="button"
                >Load more</button>
        </div>
        </>
}