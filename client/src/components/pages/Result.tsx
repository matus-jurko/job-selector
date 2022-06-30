import { HomeIcon, PencilIcon } from '@heroicons/react/solid';
import { useNavigate, useParams } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { Matrix as MatrixType, ModalViews } from '../../types';
import { ModalContext } from '../../context/modal/modalContext';
import { AppContext } from '../../context/app/appContext';
import { baseSteps } from '../../config';
import { api } from '../../utils';

import useContext from '../../hooks/useContext';
import Button from '../layout/Button';
import Matrix from '../app/Matrix';
import NotFound from './NotFound';

const Result = () => {
  const navigate = useNavigate();

  const { id } = useParams(); // Get the matrix id from URL...
  const [loaded, setLoaded] = useState<boolean | undefined>(undefined);

  const { openModal } = useContext(ModalContext);
  const { loadMatrix, setEditingId, matrix, saveMatrix } =
    useContext(AppContext);

  useEffect(() => {
    if (id && !loaded) {
      axios
        .get(api(`/api/matrix/${id}`))
        .then(({ data }: AxiosResponse<MatrixType, 'id'>) => {
          saveMatrix(data);
          setLoaded(true);
        })
        .catch(({ message }: AxiosError) => {
          console.error(message);
          setLoaded(false);
        });
    }
  });

  const handleClick = () => {
    setEditingId(id);
    loadMatrix(matrix as MatrixType);
    openModal(ModalViews.FIRST_STEP, baseSteps[0].title);
  };

  if (loaded === undefined) {
    return (
      <div className="text-lg font-medium text-center text-white">
        Načítavam...
      </div>
    );
  }

  if (!loaded) return <NotFound />;

  return (
    <div className="w-full mx-auto sm:text-center sm:max-w-5xl">
      <h1 className="mx-auto mb-4 text-4xl font-bold leading-tight tracking-tight text-left text-white sm:max-w-md lg:text-6xl sm:text-center drop-shadow-2xl lg:max-w-3xl">
        {matrix?.name}
      </h1>
      <p className="mx-auto mb-5 text-base font-medium leading-relaxed text-left lg:text-xl text-slate-300 sm:text-center lg:max-w-3xl sm:max-w-xl drop-shadow-2xl">
        Na tejto stránke je zobrazená matica s výsledkami daného
        používateľa. Maticu je možné upraviť (zmeny sa následne uložia
        automaticky).
      </p>
      <div className="flex flex-col justify-center gap-4 mb-8 md:flex-row">
        <Button
          className="justify-center"
          title={`Upraviť maticu používateľa ${matrix?.name}`}
          variant="primary-solid"
          onClick={handleClick}
        >
          <PencilIcon
            className="inline-block w-5 h-5 mr-2"
            aria-hidden={true}
          />
          Upraviť maticu
        </Button>
        <Button
          className="justify-center"
          onClick={() => navigate('/')}
          title="Späť na domovskú stránku"
          variant="primary-outline"
        >
          <HomeIcon
            className="inline-block w-5 h-5 mr-2"
            aria-hidden={true}
          />
          Domovská stránka
        </Button>
      </div>
      <Matrix matrix={matrix} />
    </div>
  );
};

export default Result;
