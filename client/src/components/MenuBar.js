import React, { useContext, useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

import { AuthContext } from "../context/auth";

const MenuBar = (props) => {
  const { user, logout } = useContext(AuthContext);

  let role = "";

  if (user) {
    if (user.role === 1) {
      role = "Opérateur";
    }
    if (user.role === 2) {
      role = "Gestionnaire";
    }
    if (user.role === 3) {
      role = "Décideur";
    }
  }

  const pathname = window.location.pathname;

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu pointing secondary size='massive' color='teal'>
      <Menu.Item name={role + " " + user.username} active as={Link} to='/' />
      {user.role === 2 ? (
        <Menu.Item
          name='Stock'
          active={activeItem === "Stock"}
          onClick={handleItemClick}
          as={Link}
          to='/stock'
        />
      ) : null}
      <Menu.Menu position='right'>
        {user.role === 2 ? (
          <>
            <Menu.Item
              name='Stats par mois'
              active={activeItem === "Stats par mois"}
              onClick={handleItemClick}
              as={Link}
              to='/stats'
            />
            <Menu.Item
              name='Stats par ans'
              active={activeItem === "Stats par ans"}
              onClick={handleItemClick}
              as={Link}
              to='/statsyear'
            />
            <Menu.Item
              name='Stats par sexe'
              active={activeItem === "Stats par sexe"}
              onClick={handleItemClick}
              as={Link}
              to='/sexe'
            />
          </>
        ) : null}

        {user.role === 1 ? (
          <Menu.Item
            name='Ajouter enfant'
            active={activeItem === "Ajouter enfant"}
            onClick={handleItemClick}
            as={Link}
            to='/ajouter'
          />
        ) : null}
        {user.role === 0 ? (
          <Menu.Item
            name='register'
            active={activeItem === "register"}
            onClick={handleItemClick}
            as={Link}
            to='/register'
          />
        ) : null}
        <Menu.Item
          name='logout'
          onClick={() => {
            logout();
            props.history.push("/");
          }}
        />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary size='massive' color='teal'>
      <Menu.Item
        name='home'
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to='/'
      />

      <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to='/login'
        />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
};

export default withRouter(MenuBar);
