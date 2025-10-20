import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt eaque
      quibusdam numquam tempore eveniet? Perferendis, rerum delectus. Labore
      quam hic corrupti impedit commodi minus perferendis odio, itaque
      repellendus? At, accusamus.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=luizeduardoSC&show_icons=true&theme=highcontrast" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LuizEduardoSC&layout=compact&langs_count=7&theme=highcontrast" />
    </GithubSecao>
  </section>
)

export default Sobre
