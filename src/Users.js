import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./Pagination";
import Nav from "./Nav";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
let PageSize = 10;
function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((actualData) => {
        setUsers(actualData.results);
        console.log(users);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);

  return (
    <>
      <Helmet>
        <title>Users</title>
        <meta name="description" content="view our users log" />
        <link rel="canonical" href="/Users" />
      </Helmet>
      <div className="App">
        <div className="Header ">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjgzNTUgMjEuMjA2NUgxMi40MjIyTDcuNjEwMzUgMzYuMjIyMUgxMC41MTA0TDExLjg0MjIgMzIuMDk3NkgxOC41MDE1TDE5Ljg5NzggMzYuMjIyMUgyMi43OTc4TDE3LjgzNTUgMjEuMjA2NVpNMTIuNjE1NSAyOS43MTMyTDE1LjEyODkgMjEuOTU4NEwxNy43MDY2IDI5LjcxMzJIMTIuNjE1NVpNMjYuNzY2NSAzNi4yNDM2VjIxLjIwNjVIMjQuMTAyOFYzNi4yNDM2SDI2Ljc2NjVaTTMyLjYzODQgMjUuMTU5MVYyMS4yMDY1SDI5Ljk3NDdWMjUuMTU5MUgyOC4zNjM2VjI3LjI0MjhIMjguNjIxNEMyOC42MjE0IDI3LjI0MjggMjkuOTc0NyAyNy4yNDI4IDI5Ljk3NDcgMjguNzI1MUMyOS45NzQ3IDI5LjM2OTUgMjkuOTc0NyAzMy41MTU0IDI5Ljk3NDcgMzMuNTE1NEMyOS45NzQ3IDM1LjA0MDYgMzEuMTk5MiAzNi4yNDM2IDMyLjcwMjkgMzYuMjQzNkgzNC41Mjg4VjMzLjg4MDZDMzQuNTI4OCAzMy44ODA2IDMzLjkwNTggMzMuODgwNiAzMy40NzYyIDMzLjg4MDZDMzMuMDI1MSAzMy44ODA2IDMyLjYzODQgMzMuNDkzOSAzMi42Mzg0IDMzLjA0MjhWMjguOTE4NEMzMi42Mzg0IDI3LjMyODggMjkuMjY1OCAyNy4yNDI4IDI4LjcwNzMgMjcuMjQyOEgzNC41Mjg4VjI1LjE1OTFIMzIuNjM4NFpNMTYuMDc0MSA0Ny45NDVDMTYuMDc0MSA0Ny45NDUgMTMuMTk1NSA0Ny4yNzkxIDEzLjEwOTYgNDcuMjU3NkMxMi4xNDI5IDQ2Ljk5OTkgMTEuMzI2NiA0Ni41MjczIDExLjMyNjYgNDUuNTM5MUMxMS4zMjY2IDQ0LjQ2NSAxMi42MzcgNDMuNTg0MyAxNC4yOTExIDQzLjU4NDNDMTYuMzEwMyA0My41ODQzIDE3LjQ0ODkgNDQuODMwMiAxNy40NDg5IDQ2LjA1NDdIMjAuMjYyOUMyMC4yNjI5IDQzLjQzMzkgMTguMjIyMiA0MS4yMjEzIDE0LjI5MTEgNDEuMjIxM0MxMC45NjE1IDQxLjIyMTMgOC41MTI1NyA0My4wMDQzIDguNTEyNTcgNDUuNTYwNkM4LjUxMjU3IDQ4LjIwMjggMTAuMTg4MSA0OS40NzAyIDEyLjYzNyA1MC4wMjg3QzEyLjYzNyA1MC4wMjg3IDE1LjUzNyA1MC42OTQ3IDE1LjYwMTUgNTAuNzE2MkMxNi43MTg1IDUwLjk5NTQgMTcuNjQyMiA1MS41NTM5IDE3LjY0MjIgNTIuNjQ5NUMxNy42NDIyIDU0LjAwMjggMTUuOTY2NiA1NC44NjIxIDE0LjIwNTIgNTQuNzExN0MxMS44MjA3IDU0LjUxODQgMTAuOTQgNTIuOTUwMiAxMC45NCA1MS44MzMySDguMTQ3MzlDOC4xNDczOSA1NC4yODIxIDEwLjE4ODEgNTYuOTg4NyAxNC4yNDgxIDU3LjA5NjFDMTcuMjk4NSA1Ny4xNjA2IDIwLjQ1NjMgNTUuNDg1IDIwLjQ1NjMgNTIuNjQ5NUMyMC40NTYzIDUwLjAyODcgMTguNjUxOCA0OC41NjggMTYuMDc0MSA0Ny45NDVaTTI3LjMwMTMgNTQuNTgyOEMyNS42MDQzIDU0LjU4MjggMjQuNzAyMSA1Mi45NzE3IDI0LjcwMjEgNTEuMTI0M0MyNC43MDIxIDQ5LjI1NTQgMjUuODE5MSA0Ny42NjU4IDI3LjI3OTggNDcuNjY1OEMyOC40Mzk4IDQ3LjY2NTggMjkuMzYzNSA0OC41MjUgMjkuNjg1OCA0OS43MDY1SDMyLjU2NDNDMzIuMDkxNyA0Ni45MzU0IDI5Ljg3OTEgNDUuMzAyOCAyNy4yNTgzIDQ1LjMwMjhDMjQuMzE1NCA0NS4zMDI4IDIxLjc1OTEgNDcuODgwNiAyMS45MDk1IDUxLjQ2OEMyMi4wMzg0IDU0LjgxOTEgMjQuNDQ0MyA1Ni45MjQzIDI3LjMyMjggNTYuOTI0M0MzMC4wMDggNTYuOTI0MyAzMi4wMDU4IDU1LjE0MTMgMzIuNTIxMyA1Mi43MTM5SDI5LjU1NjlDMjkuMzIwNiA1My42ODA2IDI4LjQ2MTMgNTQuNTgyOCAyNy4zMDEzIDU0LjU4MjhaTTM3LjA0NTcgNTAuMTU3NkMzNy4wNDU3IDUwLjE3OTEgMzcuMDQ1NyA1MC4yMDA2IDM3LjA0NTcgNTAuMjIyMUMzNy4wNDU3IDUwLjIwMDYgMzcuMDQ1NyA1MC4xNzkxIDM3LjA0NTcgNTAuMTU3NlpNNDAuMDk2MSA0NS4zNDU4QzM4LjQ2MzUgNDUuNDc0NyAzNy4wNjcyIDQ3LjE3MTcgMzcuMDQ1NyA1MC4xNTc2QzM3LjA2NzIgNDguNjc1NCAzNy43MzMxIDQ3LjYwMTMgMzkuMjU4MyA0Ny42MDEzQzQwLjkzMzggNDcuNjAxMyA0MS40NzA5IDQ4Ljg0NzMgNDEuNDcwOSA1MC4yMjIxVjU2LjY4OEg0NC4xNTZWNDkuMzE5OUM0NC4xNTYgNDYuNzQyMSA0Mi4wMjk0IDQ1LjE5NTQgNDAuMDk2MSA0NS4zNDU4Wk0zNC4zODIgNDEuNjUxVjU2LjY4OEgzNy4wNDU3VjQxLjY1MUgzNC4zODJaTTUxLjM4NiA0NS4zMDI4QzQ4LjUyOSA0NS4zMDI4IDQ1LjkwODMgNDcuNDI5NSA0NS45MDgzIDUxLjEyNDNDNDUuOTA4MyA1NC44MTkxIDQ4LjQ4NiA1Ni45MDI4IDUxLjM4NiA1Ni45MjQzQzU0LjMwNzUgNTYuOTAyOCA1Ni44ODUzIDU0Ljc5NzYgNTYuODg1MyA1MS4xMjQzQzU2Ljg4NTMgNDcuNDI5NSA1NC4yNDMxIDQ1LjMwMjggNTEuMzg2IDQ1LjMwMjhaTTUxLjM4NiA1NC41NjEzQzQ5Ljk2ODMgNTQuNTYxMyA0OC41OTM1IDUzLjQ0NDMgNDguNTkzNSA1MS4xMjQzQzQ4LjU5MzUgNDguOTMzMiA0OS45NDY4IDQ3LjY4NzMgNTEuMzg2IDQ3LjY2NThDNTIuODQ2OCA0Ny42ODczIDU0LjIwMDEgNDguOTU0NyA1NC4yMDAxIDUxLjEyNDNDNTQuMjAwMSA1My40NDQzIDUyLjgyNTMgNTQuNTYxMyA1MS4zODYgNTQuNTYxM1pNNjMuNzYzMSA0NS4zMDI4QzYwLjkwNiA0NS4zMDI4IDU4LjI4NTMgNDcuNDI5NSA1OC4yODUzIDUxLjEyNDNDNTguMjg1MyA1NC44MTkxIDYwLjg2MzEgNTYuOTAyOCA2My43NjMxIDU2LjkyNDNDNjYuNjg0NiA1Ni45MDI4IDY5LjI2MjMgNTQuNzk3NiA2OS4yNjIzIDUxLjEyNDNDNjkuMjYyMyA0Ny40Mjk1IDY2LjYyMDEgNDUuMzAyOCA2My43NjMxIDQ1LjMwMjhaTTYzLjc2MzEgNTQuNTYxM0M2Mi4zNDUzIDU0LjU2MTMgNjAuOTcwNSA1My40NDQzIDYwLjk3MDUgNTEuMTI0M0M2MC45NzA1IDQ4LjkzMzIgNjIuMzIzOCA0Ny42ODczIDYzLjc2MzEgNDcuNjY1OEM2NS4yMjM4IDQ3LjY4NzMgNjYuNTc3MiA0OC45NTQ3IDY2LjU3NzIgNTEuMTI0M0M2Ni41NzcyIDUzLjQ0NDMgNjUuMjAyMyA1NC41NjEzIDYzLjc2MzEgNTQuNTYxM1pNNzMuODIwMSA1Ni42ODhWNDEuNjUxSDcxLjE1NjRWNTYuNjg4SDczLjgyMDFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNzMuODUxNyAzMi45NjI5SDM3LjQwNzJWMzYuMjIyMUg3My44NTE3VjMyLjk2MjlaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"
            alt="altshool logo"
          />
          <Nav />
        </div>

        {currentTableData?.map((user, i) => (
          <div key={i} className="card">
            <img src={user.picture.large} alt="Avatar" />
            <h1>{user.name.title},</h1>

            <h3>{user.name.first} </h3>
            <h3>{user.name.last} </h3>

            <p className="">{user.gender} </p>
            <p className="">{user.phonel} </p>
            <p className="">{user.email} </p>
            <p className="">{user.location.city} </p>
            <p className="">{user.location.country} </p>
          </div>
        ))}
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}

export default Users;
