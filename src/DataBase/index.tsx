import SQLite from 'react-native-sqlite-storage';
 
const db = SQLite.openDatabase(
  {
    name: 'RestaurantDB',
    location: 'default',
  },
  (success: any) => { console.log(success) },
  (error: any) => { console.log(error) }
);
 
export const GetDataFromLocalDataBase = (sql, params = []) => new Promise((resolve, reject) => {
  db.transaction((tx) => {
    tx.executeSql(sql, params, (tx, results) => {
      resolve(results);
    },
      (error) => {
        reject(error);
      });
  });
});
 
export const UpdateDataToLocalDataBase = (sql, params = []) => new Promise((resolve, reject) => {
  db.transaction((tx) => {
    tx.executeSql(sql, params, (tx, results) => {
      resolve(results);
    },
      (error) => {
        reject(error);
      });
  });
});
 
export const CreateWishlistTable = () => {
  db.transaction((tx: any) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS "
      + "wishlist "
      + "(business_status VARCHAR, icon VARCHAR, name VARCHAR, place_id VARCHAR, rating INTEGER, scope VARCHAR, vicinity VARCHAR );"
    )
  })
};
 
export const StoreWishListDataToTable = async (data) => {
  try {
    await db.transaction(async (tx) => {
      await tx.executeSql(
        "INSERT INTO wishlist (business_status, icon, name, place_id, rating, scope, vicinity ) VALUES (?,?,?,?,?,?,?)",
        [data.business_status, data.icon, data.name, data.place_id, data.rating, data.scope,data.vicinity ]
      );
    });
  } catch (error) {
    console.log(" StoreWishListDataToTable ==>> ", error);
  }
}
 
export const DeleteTableData = (tableName: string) => {
  console.log('db call ', tableName);
 
  db.transaction((tx: any) => {
    tx.executeSql(
      `DELETE FROM ${tableName}`
    )
  })
};
 