import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <h1>Dialogs</h1>
            <div className={s.content_dialogs}>
                <div className={s.dialogs_list}>
                    <div className={`${s.dialogs_item} ${s.active}`}>
                        <span>Alex</span>
                        <span>last message</span>
                        <span>28.10.2022</span>
                    </div>
                    <div className={s.dialogs_item}>
                        <span>Andy</span>
                        <span>last message</span>
                        <span>19.09.2022</span>
                    </div>
                    <div className={s.dialogs_item}>
                        <span>Mikhail</span>
                        <span>last message</span>
                        <span>12.04.2022</span>
                    </div>
                    <div className={s.dialogs_item}>
                        <span>Ragnar</span>
                        <span>last message</span>
                        <span>20.05.2021</span>
                    </div>
                    <div className={s.dialogs_item}>
                        <span>Eriks</span>
                        <span>last message</span>
                        <span>04.01.2021</span>
                    </div>
                </div>
                <div className={s.messages_list}>
                    <div className={s.message_item}>
                        <p>Test message</p>
                        <p>20.04.2022</p>
                    </div>
                    <div className={s.message_item}>
                        <p>Test message 2</p>
                        <p>20.04.2022</p>
                    </div>
                    <div className={s.message_item}>
                        <p>Test message 3</p>
                        <p>20.04.2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs