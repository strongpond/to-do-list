import React from 'react';

// STYLES
import * as S from './UserFormBtnEle';

const UserFormBtn = ({ form, handleClickButton }) => {
  return (
    <S.BtnsContainer>
      {form.btnLists.map((list, i) => {
        return (
          <S.Btns
            key={i}
            blackFont={list.blackFont}
            backgroundColor={list.bg}
            onClick={handleClickButton}
            name={list.name}
          >
            {list.text}
          </S.Btns>
        );
      })}
    </S.BtnsContainer>
  );
};

export default UserFormBtn;
