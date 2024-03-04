import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import custom from './custom.scss?inline'
import 'iconify-icon'

@customElement('home-element')
export class HomeElement extends LitElement {
  override render() {
    return html`
      <h1 class="landing__title">
        #QroDevelopers
      </h1>

      <section class="landing__call-to-action">
        <p>
        La comunidad tech’ para conversar sobre Software Libre, Librerías Google y Desarrollo Profesional en Querétaro. ¡Suscríbete para recibir noticias o explora nuestras próximas actividades!
        </p>
        <a class="landing__call-to-action_button"
          target="_blank"
          href="https://gdg.community.dev/accounts/login/?next=/gdg-queretaro/"
          >Suscríbete
        </a>
        <a class="landing__call-to-action_button-muted"
          target="_blank"
          href="https://www.linkedin.com/groups/14281011/"
          >Únete en LinkedIn
        </a>
      </section>
      <!-- TODO: Implement ICONFIFY -->
      <nav class="landing__social">
        <ul>
          <li>
            <a target="_blank" href="https://github.com/gdg-repos/Queretaro/discussions">
              <iconify-icon icon="fa6-brands:github"></iconify-icon>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/search?q=%23QroDevelopers&src=typed_query">
              <iconify-icon icon="fa6-brands:x-twitter"></iconify-icon>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/qro.software/">
              <iconify-icon icon="fa6-brands:instagram"></iconify-icon>
            </a>
          </li>
          <!-- <li>
            <a target="_blank" href="#">
              <iconify-icon icon="fa6-brands:discord"></iconify-icon>
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              <iconify-icon icon="fa6-brands:whatsapp"></iconify-icon>
            </a>
          </li> -->
        </ul>
      </nav>
    `
  }

  static styles = [custom]
}
