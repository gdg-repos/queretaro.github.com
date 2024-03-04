/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import sassy from './stylesheet.scss';

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
        <a class="landing__call-to-action_button" href="#"
          >Suscríbete
        </a>
        <a class="landing__call-to-action_button-muted" href="#"
          >Únete en LinkedIn
        </a>
      </section>

      <nav class="landing__social">
        <ul>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">WhatsApp</a>
          </li>
        </ul>
      </nav>
    `;
  }

  static override styles = [sassy]
  // css`
  //   :host {
  //       /* background-color: MidnightBlue; */
  //     display: grid;
  //     grid-template: 
  //       "margin-top"      3fr
  //       "title"           auto
  //       "call_to_action"  auto
  //       "social"          auto
  //       "margin-bottom"   3fr;
  //     margin: auto;
  //     height: 100vh;
  //     width: min(90%, 50rem);
  //   }

  //   .landing__title {
  //     font-size: clamp(5pt, 12vw - .1rem, 79pt);
  //     /* justify-self: center; */
  //     margin: 0;
  //     grid-area: title;
  //   }

  //   .landing__call-to-action {
  //     display: flex;
  //     flex-wrap: wrap;
  //     gap: 1rem;

  //     font-size: clamp(12pt, 4vw - 1rem, 14pt);
  //     line-height: 1.5;
  //     min-inline-size: 3ch;
  //     overflow-wrap: break-word;

  //     margin: 0;
  //     grid-area: call_to_action;

  //     p { flex-basis: 100%; }

  //     a {
  //       display: flex;
  //       text-decoration: none;
  //       padding: 1.3em 2.2em;
  //       border-radius: 1.3em;

  //       font-size: 120%;
  //       font-weight: bold;
  //       /* color: inherit; */
  //     }
  //   }

  //   .landing__call-to-action_button {
  //     background-color: #FFDB2020;
  //     color: gold; 
  //   }

  //   .landing__call-to-action_button-muted {
  //     background-color: #FFFFFF10;
  //     color: inherit;
  //   }

  //   .landing__social {
  //     color: white;
  //     font-size: 5pt;
  //     /* margin: 0; */
  //     grid-area: social;
      
  //     > ul {
  //       display: flex;
  //       gap: 1rem;

  //       padding: 0;

  //       list-style-type: none;
  //     }

  //     > ul a {
  //       color: inherit;
  //       text-decoration: none;
  //     }
  //   }
  // `;
}

declare global {
  interface HTMLElementTagNameMap {
    'home-element': HomeElement;
  }
}
