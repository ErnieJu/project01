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
            <td><center>Lambda, Stream, Optional ëą</center></td>
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

## API ě¤ęł

## đ íě

| Function | Method | Depth | URL | ě¤ëŞ | í í° |
|------|---|---|---|---|---|
|<center>íěěĄ°í<center/>|<center>GET</center>|<center>1<center/>|- /api/user/{user_id}|<center>ę´ëŚŹě íěěĄ°í</center>|<center>O</center>|
|<center>íěę˛ě<center/>|<center>GET</center>|<center>1<center/>|- /api/user/{user_name}|<center>íěę˛ě<br/>(ě´ëŚ)</center>|<center>O</center>|
|<center>íěę˛ě<center/>|<center>GET</center>|<center>1<center/>|- /api/user/{user_name}|<center>ě´ëŚěźëĄ íěę˛ě</center>|<center>O</center>|
|<center>íěę˛ě<center/>|<center>GET</center>|<center>1<center/>|- /api/user/{user_name}|<center>ě´ëŚěźëĄ íěę˛ě</center>|<center>O</center>|
|<center>íěę°ě<center/>|<center>POST</center>|<center>1<center/>|- /api/user/join|<center>íěę°ě</center>|<center>X</center>|
|<center>ëĄęˇ¸ě¸<center/>|<center>POST</center>|<center>1<center/>|- /api/user/join|<center>íěę°ě</center>|<center>X</center>|
|<center>íěě ëł´ ěě <center/>|<center>PUT</center>|<center>1<center/>|- /api/user/{user_id}|<center>íěě ëł´ ěě </center>|<center>O</center>|
|<center>íěíí´<center/>|<center>DELETE</center>|<center>1<center/>|- /api/user/delete|<center>íěíí´</center>|<center>X</center>|
<br>
<br/>


## đ ę˛ěí

| Function | URL | Method | Token | ě¤ëŞ |
|------|---|---|---|---|
|<center>íěę°ě<center/>|/api/user/join|<center>POST<center/>|íě¤í¸3|íě¤í¸3|
|<center>ë¨ěź ę˛ěëŹź ěĄ°í<center/>|/api/board/{board_id}}|<center>GET<center/>|<center>X<center/>|board_idëĄ ěĄ°í|
|<center>ę˛ěę¸ ěěą<center/>|/api/board/write|<center>POST<center/>|<center>O<center/>|íě idëĄ ěĄ°í|
|<center>ëĄęˇ¸ě¸<center/>|/api/user/join|<center>GET<center/>|<center>O<center/>|<center>ę˛ěę¸ ě­ě <center/>|
|<center>ę˛ěę¸ ě­ě <center/>|/api/user/delete/{user_id}<center/>|<center>DELETE<center/>|<center>O<center/>|<center>ę˛ěę¸ ě­ě <center/>|