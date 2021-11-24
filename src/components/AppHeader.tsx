import { createAssistant } from '@sberdevices/assistant-client'
import { Header, isSberBox } from '@sberdevices/plasma-ui'
import { isSberBoxTop } from '@sberdevices/plasma-ui/utils/deviceDetection'

export const AppHeader = ({assistant}: {assistant: ReturnType<typeof createAssistant>}) => {
    const isSberBoxLike: boolean = isSberBox() || isSberBoxTop()
    const closeApp = () => {
        assistant.close()
    }
    return (
        <Header
            back={false}
            minimize={!isSberBoxLike ? true : undefined}
            logo='/icon2.png'
            onMinimizeClick={closeApp}
            title={'Подбор Фильма'}
        />
    )
}