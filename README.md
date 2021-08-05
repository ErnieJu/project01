## Used Skill

<table>
    <thead>
        <tr align=center>
            <th>Category</th>
            <th>Name</th>
            <th><center></center>Function</th>
            <th><center>Version</center></th>
        </tr>
    </thead>
    <tbody>
        <tr align=center>
            <td rowspan=2>Language</td>
            <td><center>Java</center></td>
            <td><center>Lambda, Stream, Optional 등</center></td>
            <td><center>11</center></td>
        </tr>
        <tr align=center>
            <td>JavaScript</td>
            <td>L3  B</td>
            <td>L3  B</td>
        </tr>
        <tr align=center>
            <td rowspan="2">Framework</td>
            <td><center>SpringBoot</center></td>
            <td><center>-</center></td>
            <td><center>2.52</center></td>
        </tr>
        <tr align=center>
            <td><center>React</center></td>
            <td><center>-</center></td>
            <td><center>2.52</center></td>
        </tr>
        <tr align=center>
            <td><center>Build</center></td>
            <td colspan=3"><center>Gradle</center></td>
        </tr>
        <tr align=center>
            <td>Database</td>
            <td><center>Mariadb</center></td>
            <td><center>-</center></td>
            <td><center>2.52</center></td>
        </tr>
        <tr align=center>
            <td rowspan=2"><center>Library</center></td>
            <td><center>JPA</center></td>
            <td><center>-</center></td>
            <td><center>2.52</center></td>
        </tr>
        <tr align=center>
            <td><center>Querydsl</center></td>
            <td><center>-</center></td>
            <td><center>2.52</center></td>
        </tr>
        <tr align=center>
            <td><center>Server</center></td>
            <td><center>AWS</center></td>
            <td><center>-</center></td>
            <td><center>-</center></td>
        </tr>
    </tbody>
</table>




<br/><br/>

## API 설계

## 📌 회원

| Function | Method | Depth | URL | 설명 | 토큰 |
|------|---|---|---|---|---|
|<center>회원조회<center/>|<center>GET</center>|<center>1<center/>|- /api/user/{user_id}|<center>관리자 회원조회</center>|<center>O</center>|
|<center>회원검색<center/>|<center>GET</center>|<center>1<center/>|- /api/user/{user_name}|<center>회원검색<br/>(이름)</center>|<center>O</center>|
|<center>회원검색<center/>|<center>GET</center>|<center>1<center/>|- /api/user/{user_name}|<center>이름으로 회원검색</center>|<center>O</center>|
|<center>회원검색<center/>|<center>GET</center>|<center>1<center/>|- /api/user/{user_name}|<center>이름으로 회원검색</center>|<center>O</center>|
|<center>회원가입<center/>|<center>POST</center>|<center>1<center/>|- /api/user/join|<center>회원가입</center>|<center>X</center>|
|<center>로그인<center/>|<center>POST</center>|<center>1<center/>|- /api/user/join|<center>회원가입</center>|<center>X</center>|
|<center>회원정보 수정<center/>|<center>PUT</center>|<center>1<center/>|- /api/user/{user_id}|<center>회원정보 수정</center>|<center>O</center>|
|<center>회원탈퇴<center/>|<center>DELETE</center>|<center>1<center/>|- /api/user/delete|<center>회원탈퇴</center>|<center>X</center>|
<br>
<br/>


## 📌 게시판

| Function | URL | Method | Token | 설명 |
|------|---|---|---|---|
|<center>회원가입<center/>|/api/user/join|<center>POST<center/>|테스트3|테스트3|
|<center>단일 게시물 조회<center/>|/api/board/{board_id}}|<center>GET<center/>|<center>X<center/>|board_id로 조회|
|<center>게시글 작성<center/>|/api/board/write|<center>POST<center/>|<center>O<center/>|회원 id로 조회|
|<center>로그인<center/>|/api/user/join|<center>GET<center/>|<center>O<center/>|<center>게시글 삭제<center/>|
|<center>게시글 삭제<center/>|/api/user/delete/{user_id}<center/>|<center>DELETE<center/>|<center>O<center/>|<center>게시글 삭제<center/>|