import { ContactCard } from '../ContactCard/ContactCard'
import { Header } from '../shared/Header/Header'
import { Text } from '../shared/Text/Text'
import { EmailForm } from '../EmailForm/EmailForm'
import { Card } from '../shared/Card/Card'
import { AppContainer, LogoImage, HeroImage } from './AppStyles'

function App() {
    return (
        <AppContainer>
            <LogoImage src='images/logo.svg' alt='Base Apparel Logo' />
            <HeroImage />

            <Card>
                <Header />

                <Text>
                    Hello fellow shoppers! We're currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </Text>

                <EmailForm />
            </Card>
            <ContactCard />
        </AppContainer>
    )
}

export default App
