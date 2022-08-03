import React from 'react';
import './PageFooter.css';


class PageFooter extends React.Component {
  render() {
    return (
      <footer className="pageFooter">
        <section>
          <ul>
            <li>
              <a href="facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/imagens/fb.png" alt="" />
              </a>
            </li>
            <li>
              <a href="twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/imagens/tw.png" alt=''/>
              </a>
            </li>
            <li>
              <a href="instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/imagens/ig.png" alt=''/>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <img src="/imagens/logo.png" alt=""/>
        </section>
        <section>
          <p>
            Desenvolvido por Cristiano Lemos
          </p>
        </section>
      </footer>
    );
  }
}

export default PageFooter;