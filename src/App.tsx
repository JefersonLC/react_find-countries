import { Suspense, lazy } from 'react'
import Layout from './Layout'
import { divStyle, h2Style, inputStyle, sectionStyle } from './css/App'
import { useCountry } from './services/api'

const ManyMatches = lazy(() => import('./components/ManyMatches'))
const NoMatches = lazy(() => import('./components/NoMatches'))
const OneMatch = lazy(() => import('./components/OneMatch'))
const TooManyMatches = lazy(() => import('./components/TooManyMatches'))

function App() {
  const { response, countries, findCountry } = useCountry()
  const { error, isLoading } = response
  const { length } = countries

  if (error) return 'An error has occurred.'
  if (isLoading) return 'Loading...'

  return (
    <Layout>
      <section className={sectionStyle}>
        <div className={divStyle}>
          <h2 className={h2Style}>Find a country:</h2>
          <input type='text' onChange={findCountry} className={inputStyle} />
          <Suspense fallback={<p>Cargando...</p>}>
            {
              length === 0 
                ? <NoMatches />
                : length === 1 
                  ? <OneMatch country={countries[0]}/>
                  : length > 1 && length <= 10 
                    ? <ManyMatches />
                    : <TooManyMatches />
            }
          </Suspense>
        </div>
      </section>
    </Layout>
  )
}

export default App
