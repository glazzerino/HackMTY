using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnPersons : MonoBehaviour
{
    public GameObject personPrefaf, armchairPrefaf;
    private GameObject decoyPrefaf;
    public Vector3 center;
    public Vector3 size;
   
    void Start()
    {
        SpawnSits();
        //SpawnFood();
        
    }
    
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.G))
        {
            SpawnPerson();
        }
    }

    void SetValues(int x, int y, int z)
    {
        size.Set(x, y, z);
    }

    public void SpawnPerson()
    {
        Vector3 position = center + new Vector3(Random.Range(-size.x / 2, size.x / 2), Random.Range(-size.y / 2, size.y / 2), Random.Range(-size.z / 2, size.z / 2));
        Instantiate(personPrefaf, position, Quaternion.identity);
    }

    private void SpawnSits()
    {
        for(float i = (-size.x/2) + 1; i <= size.x/2; i++)
        {
            Vector3 pos = center + new Vector3(i, 0, 0);
            armchairPrefaf.transform.localScale = new Vector3(0.3f, 0.5f, size.z);
            Instantiate(armchairPrefaf, pos, Quaternion.identity);
        }
    }

    private void OnDrawGizmosSelected()
    {
        Gizmos.color = new Color(1,0,0,0.5f);
        Gizmos.DrawCube(center, size);
    }
}
