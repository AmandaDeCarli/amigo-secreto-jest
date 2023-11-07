import { erroState, listaParticipantesState } from "../atom";
import { useSetRecoilState, useRecoilValue } from "recoil";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const list = useRecoilValue(listaParticipantesState);
  const setErro = useSetRecoilState(erroState);

  return (nomeParticipante: string) => {
    if (list.includes(nomeParticipante)) {
      setErro("Nomes duplicados não são permitidos!");
      setTimeout(() => {
        setErro("");
      }, 5000);
      return;
    }
    return setLista((listaAtual) => [...listaAtual, nomeParticipante]);
  };
};
