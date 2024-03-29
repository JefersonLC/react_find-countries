import { Suspense, lazy } from 'react'
import Layout from './Layout'
import { div1Style, div2Style, h2Style, inputStyle, sectionStyle } from './css/App'
import { useCountry } from './services/api'

const ManyMatches = lazy(() => import('./components/ManyMatches'))
const NoMatches = lazy(() => import('./components/NoMatches'))
const OneMatch = lazy(() => import('./components/OneMatch'))
const TooManyMatches = lazy(() => import('./components/TooManyMatches'))

function App() {
  const { response, countries, findCountry, getCountry } = useCountry()
  const { error, isLoading } = response
  const { length } = countries

  if (error) return <p>An error has occurred.'</p>
  if (isLoading) return <p>Loading...'</p>
  
  return (
    <Layout>
      <section className={sectionStyle}>
        <div className={div1Style}>
          <h2 className={h2Style}>Find a country:</h2>
          <input type='text' onChange={findCountry} className={inputStyle} />
          <div className={div2Style}>
            <Suspense fallback={<p>Cargando...</p>}>
                {
                  length === 0 
                    ? <NoMatches />
                    : length === 1 
                      ? <OneMatch country={countries[0]}/>
                      : length > 1 && length <= 10 
                        ? <ManyMatches countries={countries} getCountry={getCountry}/>
                        : <TooManyMatches />
                }
            </Suspense>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default App
