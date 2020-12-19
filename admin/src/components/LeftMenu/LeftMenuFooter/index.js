/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        Mantido por — &nbsp;
        <a
          href="https://reactavancado.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mayck Coelho
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
