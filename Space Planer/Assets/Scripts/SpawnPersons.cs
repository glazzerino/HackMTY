using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnPersons : MonoBehaviour
{
    public GameObject personPrefaf;
    private GameObject decoyPrefaf;
    public Vector3 center;
    public Vector3 size;
   
    void Start()
    {
        //SpawnFood();
        
    }
    
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.G))
        {
            SpawnFood();
        }
    }

    public void SpawnFood()
    {
        Vector3 position = center + new Vector3(Random.Range(-size.x / 2, size.x / 2), Random.Range(-size.y / 2, size.y / 2), Random.Range(-size.z / 2, size.z / 2));
        Instantiate(personPrefaf, position, Quaternion.identity);
    }

    private void OnDrawGizmosSelected()
    {
        Gizmos.color = new Color(1,0,0,0.5f);
        Gizmos.DrawCube(center, size);
    }
}
