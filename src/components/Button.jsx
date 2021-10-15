import style from "./style.module.css"

export function Button({handleLoadMore}) {
    return<>
        <div className={style.buttonCont}>
            <button
                className={style.input}
                type="button"
                onClick={handleLoadMore}
                >Load more</button>
        </div>
        </>
}